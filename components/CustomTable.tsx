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

const features = [
  {
    name: "피처1",
    id: "1",
    place: "산업공단",
    formula: "a / b * c",
  },
  {
    name: "피처2",
    id: "2",
    place: "연구단지",
    formula: "x + y - z",
  },
  {
    name: "피처3",
    id: "3",
    place: "상업지구",
    formula: "p * q / r",
  },
  {
    name: "피처1",
    id: "4",
    place: "산업공단",
    formula: "a / b * c",
  },
  {
    name: "피처2",
    id: "5",
    place: "연구단지",
    formula: "x + y - z",
  },
  {
    name: "피처3",
    id: "6",
    place: "상업지구",
    formula: "p * q / r",
  },
];

export function CustomTable() {
  return (
    <div className="w-[80%] mx-auto max-h-[25vh] overflow-y-auto areaAnalysis_ptagl">
      <Table className="w-full border-2 border-gray-100">
        <TableHeader>
          <TableRow>
            <TableHead>사용자</TableHead>
            <TableHead>피처명</TableHead>
            <TableHead>계산식</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.id}>
              <TableCell>{feature.place}</TableCell>
              <TableCell>{feature.name}</TableCell>
              <TableCell>{feature.formula}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
