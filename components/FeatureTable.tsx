import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const options = [
  { feature: "방문 집중도", id: 1, per: "%" },
  { feature: "유동인구 수", id: 2, per: "%" },
  { feature: "체류 방문 비율", id: 3, per: "%" },
  { feature: "혼잡도 변화율", id: 4, per: "%" },
  { feature: "체류시간 대비 방문자 수", id: 5, per: "%" },
  { feature: "평균 체류시간 변화율", id: 6, per: "%" },
  // { feature: "시간대별 방문자 수 증가율", id: 7, per: "%" },
];

export function FeatureTable() {
  return (
    <div className="w-[80%] mt-8 max-h-[70vh] mx-auto border-2 border-gray-100 shadow-md overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="areaAnalysis_ptagb">
            <TableHead>피처명</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {options.map((option) => (
            <TableRow key={option.id}>
              <TableCell className="areaAnalysis_ptago">
                {option.feature}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
