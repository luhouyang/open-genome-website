import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contribute/')({
  component: Contribute,
})

function Contribute() {
  return <div>Hello "/contribute/"!</div>
}
