import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SpaIcon from '@mui/icons-material/Spa';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AyurMassages from  "../assets/img/ayurveda/herbal_bath.png"
import AyurTreatments from "../assets/img/ayurveda/hipbath.png"
import OsteoTreatments from "../assets/img/ayurveda/Osteopathy.jpeg"
import {Paper} from "@mui/material";
import "../index.css"
import {Fade} from "react-awesome-reveal";



const Massages = () => {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);


    const ExpandMore1 = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const ExpandMore2 = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const ExpandMore3 = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <section id="massages" style={{backgroundColor: "#d4ebf2", paddingTop: 2}} className="section bg-[#b4f9fda1] pb-32 ">

            <Fade>
            <h1 className="font-primary font-black text-4xl lg:text-6xl text-primary text-center  mb-4 lg:mt-[40px] leading-tight lg:leading-[90px]">
                <span className="text-accent">What We Offer</span>
            </h1>
            </Fade>
            <div className="container mx-auto flex items-center justify-between">
                 <div className="lg:grid  lg:grid-cols-3 gap-20">
                     <Fade cascade damping={0.3}>
                 <Card style={{backgroundColor: "#C8DF52"}} sx={{ maxWidth: 400 }}>
                    <CardHeader title="Ayurvedic Body Massages"/>
                    <CardMedia
                        component="img"
                        height="194"
                        image = {AyurMassages}/>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Ayurvedic massage combines the 5,000-year-old Indian principles of Ayurveda-the science of life and pressure points.
                            This type of massage is designed to create balance among the mind, body, and spirit, and help the body heal itself.
                            In Ayurveda, the five elements that are found in all living things—space, air, fire, water, and earth—are considered the building blocks of life.
                            These combine to create three mind-body principles, known as doshas, within the body: Vata (air and space), Pitta (fire and water),
                            and Kapha (water and earth).
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore1
                            expand={expanded1}
                            onClick={handleExpandClick1}
                            aria-expanded={expanded1}
                            aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore1>
                    </CardActions>
                    <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph color="BLUE">What Kind of Ayurvedic Massage Is Best for Each Dosha? </Typography>
                            <Typography paragraph >
                                <SpaIcon/> Kapha
                            </Typography>
                            <Typography paragraph >
                            When Kapha types are in balance, they have sturdy builds, vigor, healthy digestion, and an overall sense of calm.Excess Kapha dosha, however, can result in lethargy, obesity, apathy, and depression. Digestion suffers, and allergies and respiratory problems may arise.
                            Because of a lethargy tendency, Kaphas often benefit from deep-tissue, stimulating massage.
                            </Typography>
                            <Typography paragraph >
                                <SpaIcon/> Pitta
                            </Typography>
                            <Typography paragraph >
                                When in balance, Pittas tend to be joyful, friendly, and energetic. They tend to be of medium size and weight, and have strong digestion. The Pitta mind is clear and focused so long as it’s in balance. Out of balance, however, Pittas experience a lack of focus, increased stomach acid that can result in ulcers, constant thirst, irritability, temper outbursts, fever, and inflammation.
                                Ayurvedic massages such as Abhyanga and Odyssey can help pacify Pittas by releasing toxins and calming their central nervous systems.
                            </Typography>
                            <Typography paragraph >
                                <SpaIcon/> Vata
                            </Typography>
                            <Typography paragraph >
                                Vatas tend to be always on the go, and have an energetic and creative mind. When Vatas are in balance, they will be lively and enthusiastic, with a thin frame and excellent agility. Energy comes in bursts and they are likely to experience sudden bouts of fatigue.
                                When the Vata dosha becomes imbalanced, it manifests in the body as weight loss, constipation, hypertension, arthritis, weakness, restlessness, and digestive challenges.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                     {/*  Ayurvedic Treatments */}
                     <Card style={{backgroundColor: "#C8DF52"}} sx={{ maxWidth: 400 }}>
                        <CardHeader title="Ayurvedic Therapies"/>
                        <CardMedia
                            component="img"
                            height="194"
                            image = {AyurTreatments}/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Panchakarma, the comprehensive ayurvedic therapy for ultimate mind-body cleansing,
                                involves five types of ayurvedic therapeutic measures to detoxify the body and successfully eliminate disease causing
                                toxic elements Panchakarma therapy is often undertaken for the purification of the body, as
                                Ayurveda highly recommends body purification and detoxification before starting a therapy or a treatment.</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore2
                                expand={expanded2}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore2>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph color="BLUE">Panchakarma therapy: </Typography>
                                <Typography paragraph>
                                    <SpaIcon/> Abhyanga :  This is a massage using warm herbal oil, often done by experienced panchakarma and message therapists.  The herbal oil used in abhyanga is selected based on our body constitution.  Abhyanga can help dilute the excess amount of doshas in our body, and eliminate them in a very healthy way.
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Shirodhara : During Shirodhara, the masseur slowly pours a stream of luke warm oil over the forehead, followed by a complete relaxing head massage
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Nasya or Nasal therapy: Nasya therapy is meant for clearing up the head region of the body. You’re prepared for this treatment with a light massage and then fomentation in the shoulder and head areas.
                                    Thereafter, nasal drops are given which clear up the entire head area, and provide relief from health issues like a migraine, headaches and hair problems. These drops are actually medicated oil which cleanses the toxins present in the neck and head area.
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Swedana or ayruvedic and herbal sweat therapy:
                                    This can help open the pores and get rid of the impurities in our body, through the sweat glands.
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Udvartanam : Ayurvedic massage using herbal powders
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Pizhichil : Relaxing oil bath massage.
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Kati Basti : Ayurvedic treatment for lower back
                                </Typography>
                                <Typography paragraph>
                                    <SpaIcon/>  Uro Basti :  Ayurvedic warming procedure for the chest area and the heart
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                     {/*  Osteopathy Treatments */}
                     <Card style={{backgroundColor: "#C8DF52"}} sx={{ maxWidth: 400 }}>
                         <CardHeader title="Osteopathy Treatments"/>
                         <CardMedia
                             component="img"
                             height="294"
                             image = {OsteoTreatments}/>
                         <CardContent>
                             <Typography variant="body2" color="text.secondary">
                                 Osteopathy is the treatment of musculoskeletal imbalance in the body.
                                 Everything is connected in the body.
                                 Osteopathy respects that and supports it.
                                 Osteopathy restores good body mechanics, allowing the body to heal and painful symptoms to subside.
                                 Treatment most closely resembles chiropractic or physiotherapy treatment, however there are some important distinctions, and generally, the treatment timelines with osteopathic care are much shorter.</Typography>
                         </CardContent>
                         <CardActions disableSpacing>
                             <ExpandMore3
                                 expand={expanded3}
                                 onClick={handleExpandClick3}
                                 aria-expanded={expanded3}
                                 aria-label="show more"
                             >
                                 <ExpandMoreIcon />
                             </ExpandMore3>
                         </CardActions>
                         <Collapse in={expanded3} timeout="auto" unmountOnExit>
                             <CardContent>
                                 <Typography paragraph color="BLUE">Manual Osteopathy treatment: </Typography>
                                 <Typography paragraph className="lg:flex space-x-6 font-body font-bold text-sm text-primary">
                                     <HealthAndSafetyIcon/>When you are injured, getting good treatment, fast, is key to returning to work and play quickly.
                                 </Typography>
                                 <Typography paragraph>
                                     <HealthAndSafetyIcon/> Professional athletes opt for fast, effective treatment of repetitive strains and sports injuries so they can find relief fast and return to play.
                                 </Typography>
                                 <Typography paragraph>
                                     <HealthAndSafetyIcon/> You deserve fast relief to enjoy your daily life too.  Wipe out pain and keep moving at your preferred pace with osteopathic manipulative joint therapy and shockwave treatment for inflammation and tissue damage.
                                 </Typography>
                                 <Typography paragraph>
                                     <HealthAndSafetyIcon/>Our blend of physical therapy modalities target joints and soft tissues, as well as cellular changes than speed healing.
                                     Whether it's your work or your golf game that has you limping in pain, we can help you get moving again.
                                   </Typography>
                                 <Typography paragraph> Treatment is also offered for all below issues :
                                 </Typography>
                                 <div className="grid">
                                 <Typography align={"left"}>
                                 <p align={"left"}><HealthAndSafetyIcon/>Arthritis Pain
                                 </p>
                                 </Typography>
                                 <Typography align={"left"}>
                                  <p align={"left"}><HealthAndSafetyIcon/>Neck Pain
                                  </p>
                                 </Typography>
                                     <Typography align={"left"}>
                                         <p align={"left"}><HealthAndSafetyIcon/>Jaw Pain and TMJ
                                         </p>
                                     </Typography>
                                             <Typography align={"left"}>
                                                 <p align={"left"}><HealthAndSafetyIcon/>Shoulder Pain
                                                 </p>
                                             </Typography>
                                                     <Typography align={"left"}>
                                                         <p align={"left"}><HealthAndSafetyIcon/>Frozen Shoulder
                                                         </p>
                                                     </Typography>
                                     <Typography align={"left"}>
                                         <p align={"left"}><HealthAndSafetyIcon/>Rotator Cuff Issues
                                         </p>
                                     </Typography>
                                             <Typography align={"left"}>
                                                 <p align={"left"}><HealthAndSafetyIcon/>Golfers/Tennis Elbow
                                                 </p>
                                             </Typography>
                                                     <Typography align={"left"}>
                                                         <p align={"left"}><HealthAndSafetyIcon/>Wrist Pain
                                                         </p>
                                                     </Typography>
                                                             <Typography align={"left"}>
                                                                 <p align={"left"}><HealthAndSafetyIcon/>Back Pain
                                                                 </p>
                                                             </Typography>
                                                                     <Typography align={"left"}>
                                                                         <p align={"left"}><HealthAndSafetyIcon/>Hip Pain
                                                                         </p>
                                                                     </Typography>
                                                                             <Typography align={"left"}>
                                                                                 <p align={"left"}><HealthAndSafetyIcon/>Sacroiliac Joint Pain
                                                                                 </p>
                                                                             </Typography>
                                                                                     <Typography align={"left"}>
                                                                                         <p align={"left"}><HealthAndSafetyIcon/>Pain Down The Leg
                                                                                         </p>
                                                                                     </Typography>
                                                                                             <Typography align={"left"}>
                                                                                                 <p align={"left"}><HealthAndSafetyIcon/>Knee Pain
                                                                                                 </p>
                                                                                             </Typography>
                                                                                                     <Typography align={"left"}>
                                                                                                         <p align={"left"}><HealthAndSafetyIcon/>Plantar Fasciitis
                                                                                                         </p>
                                                                                                     </Typography>
                                                                                                             <Typography align={"left"}>
                                                                                                                 <p align={"left"}><HealthAndSafetyIcon/>Ankle Pain
                                                                                                                 </p>
                                                                                                             </Typography>
                                                                                                                     <Typography align={"left"}>
                                                                                                                         <p align={"left"}><HealthAndSafetyIcon/>Foot Pain
                                                                                                                         </p>
                                                                                                                     </Typography>
                                 </div>
                             </CardContent>
                         </Collapse>
                     </Card>
                     </Fade>
                 </div>
            </div>
        </section>
    );
};

export default Massages;
