import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";
import { useAuthStore } from "@/lib/store";
import { useCustomFeatureStore } from "@/lib/store";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface customDataType {
  featureName: string;
  formula: string;
  featureUuid: string;
}

// interface customDataPropsType {
//   newData?: {
//     featureName: string;
//     formula: string;
//     featureUuid: string;
//   }[];
// }

export function CustomTable() {
  // { newData }: customDataPropsType 인자에 집어넣기
  const { authFetch } = useAuthenticatedFetch();
  const { accessToken } = useAuthStore();
  const { setFeatureUuid } = useCustomFeatureStore();
  const [customListData, setCustomListData] = useState<customDataType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch(
        "https://localens.duckdns.org/api/customFeatures/list",
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);
      setCustomListData(data); // 기존 데이터와 합치기
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  const handleClick = (uuid: string) => {
    setFeatureUuid(uuid);
    router.push("/marketAreaAnalysis/compare/compareResult/custom/customGraph");
  };

  return (
    <div className="w-[80%] mx-auto max-h-[20vh] overflow-y-auto areaAnalysis_ptagl">
      <Table className="w-full border-2 border-gray-100">
        <TableHeader>
          <TableRow>
            <TableHead>피처명</TableHead>
            <TableHead>계산식</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customListData &&
            customListData.map(
              (
                customData // 커스텀 피처 하나 클릭하면 uuid를 상태값에 저장하고, 이 아이디는 전역상태로 관리해야 할 듯 => 커스텀 반영한 그래프 보여주는 쪽 진행
              ) => (
                <TableRow key={customData.featureUuid}>
                  <TableCell>{customData.featureName}</TableCell>
                  <TableCell>{customData.formula}</TableCell>
                  <TableCell>
                    <motion.button
                      type="button"
                      onClick={() => handleClick(customData.featureUuid)}
                      className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      적용
                    </motion.button>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </div>
  );
}
