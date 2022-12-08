import React, { useEffect, useState, useCallback } from 'react';
import Table from 'ink-table'

type Props = {
  resolution?: number
}

type Counter = { [key: number]: number }

const App: React.FC<Props> = (props) => {

  const resolution = props.resolution || 100
  const [counter, setCounter] = useState<Counter>({})

  const summarize = useCallback((chunk: string) => {
  	const bplength = Math.floor(chunk.toString().length / resolution) * resolution
	const nextCounter = {
		...counter,
		[bplength]: counter[bplength] || 0 
	}
	nextCounter[bplength]++
	setCounter(nextCounter)
  }, [counter])

  useEffect(() => {
	process.stdin.on('data', summarize as any)
	return () => { process.stdin.off('data', summarize) }
  }, [counter])


  const total = Object.values(counter).reduce((prev, count) => prev + count, 0)
  const rows = Object.keys(counter).map((bplength: any) => {
	const count = counter[bplength] as number
	return {
		length: bplength,
		count,
		percentage: (Math.floor(10000 * count / total) / 100) + '%',
	  }
  })

  return <Table data={rows} />
};

module.exports = App;
export default App;
