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
import { useEffect } from "react";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";
import { useAuthStore } from "@/lib/store";

const features = [
  {
    name: "new_feature1",
    id: "1",
    place: "user1",
    formula: "혼잡도 변화율 / 체류 방문 비율 * 유동인구 수",
  },
  {
    name: "new_feature2",
    id: "2",
    place: "user2",
    formula: "체류시간 대비 방문자 수 + 유동인구 수",
  },
  {
    name: "피처3",
    id: "3",
    place: "user3",
    formula: "p * q / r",
  },
  {
    name: "피처1",
    id: "4",
    place: "user4",
    formula: "a / b * c",
  },
  {
    name: "피처2",
    id: "5",
    place: "user5",
    formula: "x + y - z",
  },
  {
    name: "피처3",
    id: "6",
    place: "user6",
    formula: "p * q / r",
  },
];

export function CustomTable() {
  const { authFetch } = useAuthenticatedFetch();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      // 개인이 만든 커스텀 피처 리스트 불러오기
      const response = await authFetch(
        "http://13.125.95.219:8080/api/customFeatures/list",
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);
      return data;
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <div className="w-[80%] mx-auto max-h-[20vh] overflow-y-auto areaAnalysis_ptagl">
      <Table className="w-full border-2 border-gray-100">
        <TableHeader>
          <TableRow>
            {/* <TableHead>사용자</TableHead> */}
            <TableHead>피처명</TableHead>
            <TableHead>계산식</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.id}>
              {/* <TableCell>{feature.place}</TableCell> */}
              <TableCell>{feature.name}</TableCell>
              <TableCell>{feature.formula}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
