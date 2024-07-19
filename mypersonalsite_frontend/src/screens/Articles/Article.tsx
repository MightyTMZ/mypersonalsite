import "./Article.css";

// Define interfaces for each type of block and the article
interface TextBlock {
  content: string;
  type: "text block";
  order: number;
}

interface HeadingBlock {
  heading: string;
  type: "heading block";
  order: number;
}

interface ImageBlock {
  image: string;
  caption?: string;
  type: "image block";
  order: number;
}

type ContentBlock = TextBlock | HeadingBlock | ImageBlock;

interface ArticleProps {
  article: {
    id: number;
    title: string;
    slug: string;
    created_at: string;
    updated_at: string | null;
    is_published: boolean;
    featured_image: string | null;
    text_blocks: TextBlock[];
    heading_blocks: HeadingBlock[];
    image_blocks: ImageBlock[];
  };
}

interface ContentBlockProps {
  block: ContentBlock;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ block }) => {
  switch (block.type) {
    case "text block":
      return <p>{block.content}</p>;
    case "heading block":
      return <h2>{block.heading}</h2>;
    case "image block":
      return (
        <figure>
          <img
            src={block.image}
            alt={block.caption || "Article illustration"}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null; // Consider handling unexpected block types
  }
};

// Main article component
const Article: React.FC<ArticleProps> = ({ article }) => {
  const allBlocks = [
    ...article.text_blocks,
    ...article.heading_blocks,
    ...article.image_blocks,
  ].sort((a, b) => a.order - b.order); // Sorting blocks based on their order

  return (
    <div className="article">
      <h1>{article.title}</h1>
      {article.featured_image && (
        <img src={article.featured_image} alt={article.title} />
      )}
      {allBlocks.map((block, index) => (
        <ContentBlock key={index} block={block} />
      ))}
    </div>
  );
};

export default Article;
