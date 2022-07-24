import CardContainer from "./style"


export default function Card({ title, image, description, tags, avatar, author, data, link }) {
	return (
		<CardContainer>
			<div className="image-container">
				<img src={image} alt="" />
			</div>
			<div>{new Date(data).toLocaleString('pt-BR')}</div>
			<div>
				<ul>
					{tags.map((tag: string) => <li key={Math.random()}>{tag}</li>)}
				</ul>
			</div>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<img src={avatar} alt="" />
				<span>{author}</span>
			</div>
			<div>
				<a href={link}>ver post</a>
			</div>
		</CardContainer>
	)
}