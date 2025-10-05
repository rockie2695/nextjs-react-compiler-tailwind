export default function SubComponent({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  console.log("subComponent", name, value);
  return (
    <div className="text-primary">
      subComponent {name} {value}
    </div>
  );
}
