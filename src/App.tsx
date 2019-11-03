import React from 'react'

export default function App() {
  const o = {
    foo: { hello: 'Hello' },
    bar: null,
  }
  return (
    <main>
      <h1>React + TypeScript starter app</h1>
      <p>{`${o?.foo?.hello} ${o.bar ?? 'world!'}`}</p>
    </main>
  )
}
