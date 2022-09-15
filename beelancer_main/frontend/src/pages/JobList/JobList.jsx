import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./grid.css";
import Dialog from "./dialog";
// import './joblist.css'

const JobList = () => {
  const [data, setData] = useState(null);
  // const data = [
  //   {
  //     id: 1,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 100,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 2,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 200,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 3,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 300,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 4,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 400,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 5,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 500,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 6,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 700,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 7,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 900,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  //   {
  //     id: 8,
  //     title: "Product designer",
  //     content:
  //       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  //     salary: 1000,
  //     workType: "Full-time",
  //     location: "Ha-Noi",
  //   },
  // ];

  // * open state to show dialog box
  const [open, setOpen] = React.useState(false);
  const [dialogData, setDialogData] = useState({
    title: "",
    description: "",
    budget: "",
    skills: "",
    jobCategory: "",
    client: "",
  });
  // * function to open and close dialog
  const handleClickOpen = (value) => {
    setOpen(true);
    setDialogData(value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ItemCard = ({ value }) => {
    console.log(value);
    return (
      <Card className="card" sx={{ mb: 3 }}>
        <CardHeader
          action={<Typography>10 days ago</Typography>}
          title={<Typography className="header__company">Microsoft</Typography>}
          subheader={
            <Grid container>
              <Grid item xs={12}>
                <Typography className="header__position">
                  {value.title}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>${value.budget}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className="flex__ whitespace-nowrap">
                  <WorkIcon sx={{ mr: 1 }} />
                  {value.jobCategory}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography className="flex__">
                  <LocationOnIcon />
                  {value.location}
                </Typography>
              </Grid>
            </Grid>
          }
        />
        <CardContent className="content">
          <Typography
            className="content__text"
            variant="body2"
            color="text.secondary"
          >
            {value.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "right" }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            className="action__suggest"
            onClick={() => handleClickOpen(value)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    );
  };

  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const [sort, setSort] = React.useState(true);
  const itemsPerPage = 5;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFmNGM4NDQxMmQyODg1ODYwMjZhYjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjMwNjA3NDR9.vUWXh262lz12tbp9E9ZIWr26sW6N3b62HXFwrECsUa0";

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/api/jobPost/getPosts", {
      headers: {
        "auth-token": token,
      },
    });
    const data = res.data;
    if (data) setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (data) {
      if (sort) {
        setCurrentItems(
          [...data]
            .sort((a, b) => a.salary - b.salary)
            .slice(itemOffset, endOffset)
        );
      } else {
        setCurrentItems(
          [...data]
            .sort((a, b) => b.salary - a.salary)
            .slice(itemOffset, endOffset)
        );
      }

      setPageCount(Math.ceil(data.length / itemsPerPage));
    }

    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage, sort, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  // const [expanded, setExpanded] = React.useState(false);

  const [salary, setSalary] = React.useState(100);
  const [timeType, setTimeType] = React.useState("Full-time");
  const [location, setLocation] = React.useState("ha noi");

  const handleChange = (event) => {
    setSort(event.target.value);
    console.log(sort);
  };
  const handleSubmit = (event) => {
    console.log(salary, timeType, location);
  };
  const handleSalary = (event) => {
    setSalary(event.target.value);

    console.log(event.target.value);
  };
  const handleTimeType = (event) => {
    setTimeType(event.target.value);

    console.log(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);

    console.log(event.target.value);
  };
  // const handleExpandClick = () => {
  //setExpanded(!expanded);
  //};
  return (
    <>
      <div>
        <Grid item xs={12} container direction="row" justifyContent="center">
          <Paper
            className="search__bar"
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="wallet">
              <AccountBalanceWalletIcon />
            </IconButton>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={salary}
                  onChange={handleSalary}
                  sx={{ border: 0 }}
                >
                  <MenuItem value={100}>$100/year</MenuItem>
                  <MenuItem value={200}>$200/year</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="work">
              <WorkIcon />
            </IconButton>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timeType}
                  onChange={handleTimeType}
                  sx={{ border: 0 }}
                >
                  <MenuItem value={"Full-time"}>Full-time</MenuItem>
                  <MenuItem value={"Permanent"}>Permanent</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="location">
              <LocationOnIcon />
            </IconButton>
            <Box sx={{ minWidth: 140 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handleLocation}
                  value={location}
                  sx={{ border: 0 }}
                >
                  <MenuItem value={"ha noi"}>Ha-Noi</MenuItem>
                  <MenuItem value={"da nang"}>Da-Nang</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              size="large"
              variant="contained"
              color="warning"
              className="find__offers"
              onClick={handleSubmit}
            >
              Filter
            </Button>
          </Paper>
        </Grid>
        <Grid className="grid__1200 wide" spacing={3} container sx={{ mt: 2 }}>
          <div className="grid__row">
            <Grid className="grid__col l__8 m__8 s__12">
              <Grid container>
                <Grid>
                  <Typography className="bold">
                    Search results: {data?.length}
                  </Typography>
                </Grid>
                <Grid item container direction="row" justifyContent="flex-end">
                  <Typography>Sort by:</Typography>
                  <Box sx={{ maxWidth: 170, border: 0, mt: -2 }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        onChange={handleChange}
                        sx={{
                          border: "none",
                          fontSize: 15,
                        }}
                        className="bold"
                      >
                        <MenuItem value={false}>Highest Salary</MenuItem>
                        <MenuItem value={true}>Lowest Salary</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              {[...currentItems].map((val) => (
                <ItemCard key={val._id} value={val} />
              ))}
            </Grid>
            <div className="right__bar grid__col l__4 m__4 s__0">
              <div className="grid__row">
                <Card
                  className=" grid__col l__12 m__12 s__12"
                  sx={{ maxWidth: 370, mb: 3 }}
                  style={{
                    backgroundImage: `url("https://i.stack.imgur.com/1Eb5w.jpg")`,
                  }}
                >
                  <CardContent>
                    <Typography
                      color="white"
                      sx={{ fontSize: 28, fontWeight: 600 }}
                      gutterBottom
                    >
                      Do you know a prospective candidate to recommend?
                    </Typography>
                    <Typography
                      color="white"
                      sx={{ mt: 5 }}
                      variant="h5"
                      component="div"
                    >
                      Refer him to us and recevie a reward when he accepts an
                      offert
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: 5 }}>
                    <Button variant="contained" className="suggest__friend">
                      Suggest a friend
                    </Button>
                  </CardActions>
                </Card>
                <Card
                  className=" grid__col l__12 m__12 s__12"
                  sx={{ maxWidth: 370 }}
                  style={{
                    backgroundImage: `url("https://i.stack.imgur.com/1Eb5w.jpg")`,
                  }}
                >
                  <CardContent>
                    <Typography
                      color="white"
                      sx={{ fontSize: 28, fontWeight: 600 }}
                      gutterBottom
                    >
                      Do you know a prospective candidate to recommend?
                    </Typography>
                    <Typography
                      sx={{ mt: 5 }}
                      variant="h5"
                      color="white"
                      component="div"
                    >
                      Refer him to us and recevie a reward when he accepts an
                      offert
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: 5 }}>
                    <Button variant="contained" className="suggest__friend">
                      Create a job alert
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
          <div className="grid__row ">
            <div className="grid__col l__o__2 m__o__2 s__o__2 l__8 m__8 s__12">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-numLink"
                nextLinkClassName="page-numLink"
                activeLinkClassName="active"
              />
            </div>
          </div>
        </Grid>
      </div>
      <Dialog open={open} handleClose={handleClose} data={dialogData} />
    </>
  );
};

export default JobList;
