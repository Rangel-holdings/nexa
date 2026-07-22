export default function SupplementFactsPanel({ product }) {
  return (
    <div className="supplement-facts">
      <div className="supplement-facts__header">
        <p className="supplement-facts__title">Supplement Facts</p>
        <p>
          <strong>Serving size:</strong> {product.servingSize}
        </p>
        <p>
          <strong>Servings per container:</strong> {product.servingsPerContainer}
        </p>
        <p>
          <strong>Net quantity:</strong> {product.netQuantity}
        </p>
      </div>

      <table className="supplement-facts__table">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Amount</th>
            <th scope="col">% Daily Value</th>
          </tr>
        </thead>
        <tbody>
          {product.ingredients.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.amount}</td>
              <td>{row.dailyValue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="supplement-facts__other">{product.otherIngredients}</p>
    </div>
  )
}
