import {
	faInstagram,
	faTiktok,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialTag from "./components/SocialTag";

export default function App() {
	return (
		<div className="app">
			<header className="header">
				<h1>
					BBN <span className="custom-text">Zita</span>
				</h1>
			</header>
			<div className="main">
				<div className="img-con">
					<img src="/images/bbnzita-1.jpg" alt="" />
				</div>
				<div className="text-con">
					<p className="heading">
						🎫 VOTE FOR <span> ZITA</span> 🎫
					</p>
					<p className="text">
						Zitizens, our <span className="emphasis">Black Barbie</span> left
						everything behind to chase this dream — now it’s time to show up for{" "}
						<span className="emphasis">her</span>!
					</p>
					<p className="text-2">
						<div className="support">
							<span className="emphasis">
								Support with your votes and donations ❣️:
							</span>
						</div>
						<br />
						<span className="emphasis">Account Name:</span> Oloruntola Elizabeth{" "}
						<br /> <span className="emphasis">Account Number:</span> 2023612756{" "}
						<br />
						<span className="emphasis">Bank:</span> Kuda Bank
					</p>
					<p className="text-final">
						Every vote counts. Every repost matters. Let’s keep Zita in the
						house till the last day!
					</p>
				</div>
			</div>
			<footer className="footer">
				<h1 className="footer-header">Follow me on all my socials 💞</h1>
				<div className="socials">
					<SocialTag
						link={
							"https://www.tiktok.com/@zita_the_creator?_t=ZM-8yN3IJK0KT2&_r=1"
						}
						social={"Tiktok"}
						icon={faTiktok}
					/>
					<SocialTag
						link={
							"https://x.com/zitathecreator/status/1949201880183357888?s=46"
						}
						social={"Twitter"}
						icon={faXTwitter}
					/>
					<SocialTag
						link={
							"https://www.instagram.com/zita.the.creator?igsh=aHdxNmo0dXFsb2V0"
						}
						social={"Instagram"}
						icon={faInstagram}
					/>
				</div>
				<p className="remarks">
					Developed by{" "}
					<a target="_blank" href="https://twitter.com/devyalchemist">
						<span className="highlight">devyalchemist</span>
					</a>{" "}
					and{" "}
					<a target="_blank" href="https://twitter.com/devycrafter">
						<span className="highlight">devycrafter</span>
					</a>{" "}
				</p>
			</footer>
		</div>
	);
}
