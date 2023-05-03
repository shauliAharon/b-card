import { Typography } from "@mui/material";
import React from "react";
import CardInterface from "../interface/CardInterface";
import Card from "./card/Card";
import Grid from "@mui/material/Grid";
import PageHeader from "../../components/PageHeader";

type Props = {};

const Cards: React.FC<Props> = (onLIke, onDelete) => {
  let cards: CardInterface[] = [];
  cards = [
    {
      _id: "One",
      title: "One",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "two",
      title: "two Title",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "three",
      title: "three Title",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
  ];
  const handleCardDelete = (_id: string) => {
    return console.log(`You Deleted Card on: ${_id}`);
  };
  const handleCardLike = (_id: string) => {
    return console.log(`You like Card on: ${_id}`);
  };
  const handleCardEdit = (_id: string) => {
    return console.log(`You edit Card on: ${_id} `);
  };
  if (!cards.length)
    return (
      <Typography variant="body1" color="initial">
        opps NO Length
      </Typography>
    );

  return (
    <>
      <PageHeader title="" subtitle="" />
      <Grid container spacing={2} pb={2}>
        {cards.map((card: CardInterface) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              onDelete={handleCardDelete}
              onLike={handleCardLike}
              onEdit={handleCardEdit}
              card={card}
              key={card._id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
