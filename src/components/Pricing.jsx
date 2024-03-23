import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Dollar from "../assets/img/canadiandollar.png"
import "../index.css"

// import team data
import {Divider, Grid} from "@mui/material";
import {Zoom} from "react-awesome-reveal";

const Pricing = () => {
  return (
      <section id="pricing" style={{backgroundColor: "#d4ebf2", paddingTop: 2}} className="section bg-[#b4f9fda1] pb-32 ">
      <div className="container mx-auto text-center">
          <h2 className="text-5xl font-primary font-extrabold mb-4 mt-[3rem]">
             Our Fees {" "}
          </h2>


        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[40px] mt-[3rem]">
            <Zoom>
          <Box
              sx={{
                  ':hover': {
                      boxShadow: 20, // theme.shadows[20]
                  },
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 600,
                  height: 300,
                },
              }}
          >            <Paper elevation={20} style={{ padding: '30px',backgroundColor: "#C8DF52" }}>
              <div className="text-center">
                  <span className="text-2xl mt-20px text-center font-primary font-extrabold mb-1">Ayurvedic Massages</span>
                  <ul className="pricing-text mb-5 mt-[1rem] menu">
                      <li><img
                          src={Dollar}
                          width={"28px"}
                          height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] "> 100 plus tax - 60 minutes </span> </li>
                  </ul>
                </div>
              <Divider/>
              <div className="text-center" style={{padding: '30px'}}>
                  <span className="text-2xl text-center font-primary font-extrabold mb-5 mt-[2rem]"/>
                  <span className="text-2xl text-center font-secondary font-extrabold mb-5 mt-[2rem]">Ayurvedic Therapies</span>
                  <ul className="pricing-text mb-5 mt-[1rem] menu">
                      <li><img
                          src={Dollar}
                          width={"28px"}
                          height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] "> 125 plus tax onwards </span> </li>
                  </ul>
              </div>
          </Paper>

          </Box>

            <Box
                sx={{
                    ':hover': {
                        boxShadow: 20, // theme.shadows[20]
                    },
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: 600,
                        height: 300,
                    },
                }}
            >
                <Paper elevation={20} style={{ padding: '20px',backgroundColor: "#C8DF52" }}>
                    <div className="text-center" style={{padding: '3px'}}>
                        <span className="text-2xl text-center font-primary font-extrabold">Osteopathy Treatments</span>
                        <ul className="pricing-text mb-2 mt-4  menu">
                            <li> <img
                                src={Dollar}
                                width={"28px"}
                                height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] "> 120 plus tax - 60 minutes </span> </li>
                        </ul>
                        <Divider/>
                        <ul className="pricing-text mb-2 mt-[1rem] menu">
                            <li> <img
                                src={Dollar}
                                width={"28px"}
                                height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] ">95 plus tax - 45 minutes </span> </li>
                        </ul>
                        <Divider/>
                        <ul className="pricing-text mb-2 mt-[1rem] menu">
                            <li> <img
                                src={Dollar}
                                width={"28px"}
                                height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] "> 75 plus tax - 30 minutes </span> </li>
                        </ul>
                        <Divider/>
                        <ul className="pricing-text mb-2 mt-[1rem] menu">
                            <li> <img
                                src={Dollar}
                                width={"28px"}
                                height={"28px"}/> </li> <li><span className="text-2xl ml-[1rem] "> 35 plus tax - 15 minutes </span> </li>
                        </ul>
                    </div>
                </Paper>
            </Box>
            </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
