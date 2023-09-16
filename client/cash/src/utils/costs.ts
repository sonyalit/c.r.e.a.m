import { setTotalPrice } from "../context/costs"
import { ICost } from "../types"

export const countTotalPrice = (costs: ICost[]) => {
    if (costs === undefined) return
    setTotalPrice(
        costs.reduce((acc, el) => acc + Number(el.price), 0)
    )
}