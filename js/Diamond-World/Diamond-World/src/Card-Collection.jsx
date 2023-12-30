import Card from "./Card";
import diamonds from "./assets/pexels-the-glorious-studio-10475794.jpg";
import diamonds2 from "./assets/pexels-the-glorious-studio-10475793.jpg";
import diamonds3 from "./assets/pexels-the-glorious-studio-10475791.jpg";

// A collection component to wrap all the Card component needed
export default function CardCollection() {
  return (
    <div className="CardCollection">
      {/* Adding props to each Card component */}
      <Card
        pic={diamonds}
        price="$1,350"
        title="Princess"
        info={[
          "Princess Cut",
          "1.25 karts",
          "gold 18 karts",
          "2023 collection",
        ]}
      />
      <Card
        pic={diamonds2}
        price="$1,090"
        title="Swan"
        onSale={true}
        info={["Round Cut", "1 karts", "2022 collection"]}
      />
      <Card
        pic={diamonds3}
        price="$899"
        title="Ice Lake"
        onSale={true}
        info={["Crown Cut", "0.75 karts", "2022 collection"]}
      />
    </div>
  );
}
