export default function SubComponent({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  console.log("subComponent", name, value);
  return (
    <div>
      subComponent {name} {value}
    </div>
  );
}
