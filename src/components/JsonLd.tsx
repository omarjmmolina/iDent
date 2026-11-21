/** Inyecta datos estructurados en la página. */
export function JsonLd({ data }: { data: object | object[] }) {
  const bloques = Array.isArray(data) ? data : [data];
  return (
    <>
      {bloques.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
