import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialTag({ icon, social, link }) {
	return (
		<div className="social-con">
			<a target="_blank" href={link}>
				<span>
					<FontAwesomeIcon icon={icon} />
				</span>
				{social}
			</a>
		</div>
	);
}
