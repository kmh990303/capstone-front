import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";
import { useAuthStore } from "@/lib/store";

interface customDataType {
  featureName: string;
  formula: string;
  featureUuid: string;
}

interface customDataPropsType {
  newData?: {
    featureName: string;
    formula: string;
    featureUuid: string;
  }[];
}

export function CustomTable({ newData }: customDataPropsType) {
  const { authFetch } = useAuthenticatedFetch();
  const { accessToken } = useAuthStore();
  const [customListData, setCustomListData] = useState<customDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch(
        "http://13.125.95.219:8080/api/customFeatures/list",
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      setCustomListData((prevData) => [...prevData, ...data]); // 기존 데이터와 합치기
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <div className="w-[80%] mx-auto max-h-[20vh] overflow-y-auto areaAnalysis_ptagl mt-4">
      <Table className="w-full border-2 border-gray-100">
        <TableHeader>
          <TableRow>
            <TableHead>피처명</TableHead>
            <TableHead>계산식</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customListData.map((customData) => (
            <TableRow key={customData.featureUuid}>
              <TableCell>{customData.featureName}</TableCell>
              <TableCell>{customData.formula}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
