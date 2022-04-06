import Button, { buttonTypes } from "./Button";
import Tag from "./Tag";
import ViewCode from "./ViewCode";

function Card({ name, description, tags, imageSrc, codeUrl, liveUrl, videoUrl }) {
  return (
    <div className="bg-white/40 flex flex-col rounded-8 1124:max-w-[360px]">
      {/* Image */}
      <div className="w-full h-full 540:p-24">
        <img className="w-full h-auto rounded-t-8 540:rounded-b-8" src={imageSrc} alt="Harmonify" />
      </div>

      {/* Body */}
      <div className="p-24 540:pt-0 flex flex-col justify-start items-center">
        <h2 className="heading text-gray-500 mb-8">{name}</h2>
        <p className="mb-16 body text-center text-gray-400">{description}</p>

        <TagList list={tags} />

        <ViewCode href={codeUrl} />

        <div className="inline-flex flex-col 380:flex-row mt-24 gap-24">
          <Button type={buttonTypes.primary} href={liveUrl}>Try It Now</Button>
          {videoUrl && (
            <Button type={buttonTypes.secondary} href={videoUrl}>See Video</Button>
          )}
        </div>
      </div>

    </div>
  )
}

function TagList({ list }) {
  return (
    <ul className="w-full flex flex-wrap gap-16 justify-center mb-24">
      {list.map(tag => <li key={tag}><Tag>{tag}</Tag></li>)}
    </ul>
  );
}

export default Card;