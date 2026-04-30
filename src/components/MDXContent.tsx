import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="font-heading text-2xl font-bold text-primary mt-12 mb-4 scroll-mt-24" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="font-heading text-xl font-semibold text-primary mt-8 mb-3" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="text-muted leading-relaxed mb-6" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc pl-6 space-y-2 mb-6 text-muted" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal pl-6 space-y-2 mb-6 text-muted" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="font-semibold text-primary" />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="border-l-4 border-accent pl-6 py-2 my-6 bg-accent/5 rounded-r-xl italic text-primary/80"
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="bg-surface px-2 py-0.5 rounded text-sm font-mono text-accent" />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="w-full text-sm border-collapse" />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} className="text-left font-heading font-semibold text-primary p-3 border-b-2 border-border bg-surface" />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} className="p-3 border-b border-border text-muted" />
  ),
  cite: (props: React.HTMLAttributes<HTMLElement>) => (
    <cite {...props} className="not-italic text-accent font-medium" />
  ),
  figure: (props: React.HTMLAttributes<HTMLElement>) => (
    <figure {...props} className="my-8" />
  ),
  figcaption: (props: React.HTMLAttributes<HTMLElement>) => (
    <figcaption {...props} className="text-sm text-muted mt-3 text-center italic" />
  ),
  dl: (props: React.HTMLAttributes<HTMLDListElement>) => (
    <dl {...props} className="space-y-4 mb-6" />
  ),
  dt: (props: React.HTMLAttributes<HTMLElement>) => (
    <dt {...props} className="font-heading font-semibold text-primary" />
  ),
  dd: (props: React.HTMLAttributes<HTMLElement>) => (
    <dd {...props} className="text-muted leading-relaxed pl-4 border-l-2 border-accent/20" />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-custom article-content">
      <MDXRemote
        source={source}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={mdxComponents as MDXRemoteProps["components"]}
      />
    </div>
  );
}
