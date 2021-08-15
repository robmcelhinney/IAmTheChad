
import React from "react"
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ObolIconWhite from './ObolIconWhite';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            backgroundColor: `#090909`,
            display: 'flex',
            padding: '1rem',
            minHeight: '5rem',
            flexDirection: `column`,
            justifyContent: 'space-evenly',
            fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif",
            [theme.breakpoints.up('md')]: {
                flexDirection: `row`,
            },
        },
        logo: {
            maxWidth: '1.5rem',
            textDecoration: 'none',
            color: '#626262',
            margin: 'auto',
            boxSizing: 'content-box',
        },
        social: {
            maxWidth: '1.5rem',
            width: '100%',
            textDecoration: 'none',
            margin: '0 0.15rem 0 0.15rem',
            color: 'white',
            verticalAlign: 'middle'
        },
        socials: {
            margin: 'auto',
            display: 'flex',
            justifyItems: 'flex-start',
            color: 'white',
            [theme.breakpoints.up('md')]: {
                justifyItems: 'center',
            },
        },
        link: {
            textDecoration: 'none',
            color: '#909090',
        },
        text: {
            textDecoration: 'none',
            textAlign: 'center',
            color: '#909090',
            margin: 'auto',
            padding: '1rem',
            // flexGrow: 1
        }
    }),
);


export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <StaticImage
                  className={classes.logo}
                  layout="constrained"
                  loading="eager"
                  alt="Fire Emoji"
                  placeholder="blurred"
                  src={`../images/fire.png`}
                />
            {/* Copyright text */}
            <p className={classes.text}>
                {/* &#169; {new Date().getFullYear().toString() + " "}
                <Link
                    to="/"
                    rel="noopener noreferrer"
                    className={classes.link}
                >Obol Technologies Inc.
                </Link> */}
            </p>

            {/* Social Media SVGs */}
            <span className={classes.socials}>
                {/* Twitter */}
                <a
                    href="https://twitter.com/peter_szilagyi/status/1425899328560848903"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <svg
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className={classes.social}
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                {/*Github, unhappy its not an SVG like the others */}
                <a
                    href="https://github.com/OisinKyne/IAmTheChad"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <StaticImage
                        src="../images/github-icon.png"
                        alt="Github Icon"
                        layout="constrained"
                        placeholder="none"
                        className={classes.social}
                    />
                </a>
                {/* Etherscan */}
                <a
                    href="https://etherscan.io/address/0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51"
                    rel="noopener noreferrer"
                    target="_blank"
                >

                    <StaticImage
                        src="../images/etherscan-logo-white.png"
                        alt="Etherscan Icon"
                        layout="constrained"
                        placeholder="none"
                        className={classes.social}
                    />
                </a>
                {/* OpenSea */}
                <a
                    href="https://opensea.io/assets/0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51/1"
                    rel="noopener noreferrer"
                    target="_blank"
                >

                    <StaticImage
                        src="../images/openseawhite.png"
                        alt="Opensea Icon"
                        layout="constrained"
                        placeholder="none"
                        className={classes.social}
                    />
                </a>
            </span>

        </div>
    )
}
