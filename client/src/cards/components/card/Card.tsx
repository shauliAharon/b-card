import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardInterface from "../../interface/CardInterface";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
// import { type } from "os";
type props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onEdit: (id: string) => void;
};
const Card: React.FC<props> = ({ card, onLike, onDelete, onEdit }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar
        onDelete={onDelete}
        onLike={onLike}
        cardId={card._id}
        onEdits={onEdit}
      />
    </MuiCard>
  );
};

export default Card;
