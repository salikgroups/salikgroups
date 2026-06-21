type JsonLdValue = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdValue | JsonLdValue[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
