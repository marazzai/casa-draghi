import type { CostGroup } from "../data/content";

/**
 * Tabella costi responsive. Su mobile la tabella resta leggibile grazie
 * al numero ridotto di colonne; le intestazioni guidano la lettura.
 */
export default function CostTable({ group }: { group: CostGroup }) {
  return (
    <div className="costgroup">
      <h3 className="costgroup__title">{group.title}</h3>
      <table className="costtable">
        <thead>
          <tr>
            <th scope="col">Voce</th>
            {group.columns.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {group.rows.map((row) => (
            <tr key={row.item}>
              <td>{row.item}</td>
              {row.values.map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {group.totals && (
        <div className="costtotals">
          {group.totals.map((t) => (
            <span className="t" key={t.label}>
              {t.label}: <b>{t.value}</b>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
