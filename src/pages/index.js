import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExternalAnchorTag from "../components/externalAnchorTag";
import "./index.scss";

export default function Index() {
    return (
        <Layout>
            <SEO title="About" />
            <div className="summary-block">
                <StaticImage className="photo-circle" src="../../images/austin.jpg" alt='A nice picture of me!' />
                <div className="text">
                    <p>Hi, I'm Austin! I'm a software engineer and I love learning more about programming!</p>
                    <p>This website has some information about me and projects I've worked on, but I mostly use it to try out new web technologies!</p>
                </div>
            </div>
            <h1>Here's a little bit about me.</h1>
            <div>
                <p>I first started programming in middle school when I discovered the <ExternalAnchorTag href="https://www.codecademy.com/learn/introduction-to-javascript">Codeacademy course on JavaScript</ExternalAnchorTag>. Within an hour of starting the course, I was proudly showing my mom the basic for loops I made!</p>
                <p>In high school, I joined robotics to help program robots in C++, but I ended up switching gears and helping out with the team's web department. I helped work on <ExternalAnchorTag href="https://atthecontrol.com">At The Control</ExternalAnchorTag>, a streaming service for <ExternalAnchorTag href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</ExternalAnchorTag> events.</p>
                <p>After graduating from high school, I went to the <ExternalAnchorTag href="https://www.msoe.edu">Milwaukee School of Engineering</ExternalAnchorTag> to major in software engineering. After graduating, I mostly work on native mobile apps and cloud!</p>
            </div>
        </Layout>
    );
}
