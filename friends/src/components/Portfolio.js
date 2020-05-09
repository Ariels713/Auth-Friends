import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/AxiosWithAuth";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Addfriend from "./AddFriend";

const Portfolio = () => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => setFriend(res.data))
      // .then(res => console.log("PORT FOLIO DATA",res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid container>
      <Addfriend />
        {Object.entries(friend).length === 0 ? (
          <p>Loading</p>
        ) : (
          friend.map((friend) => {
            return (
              <>
                <Card
                  key={friend.id}
                  varrient="outlined"
                  style={{ margin: "1rem 0 1rem 1rem", width: "350px" }}
                >
                  <CardContent>
                    <Typography varient="h5">{friend.name}</Typography>
                    <Typography varient="h6">{friend.email}</Typography>
                  </CardContent>
                </Card>
              </>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default Portfolio;
