import Page from "@/app/help/page"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

test("Page", () => {
	render(<Page />)
	expect(screen.getByText("help")).toBeDefined()
})
