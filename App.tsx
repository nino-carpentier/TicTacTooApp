
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextProps } from 'react-native';

function Row(props: { children: React.ReactNode }) {
  return <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-around' }}>{props.children}</View>
}
type CellProps = { symbol: Symbol } & TextProps
function Cell({ symbol, ...props }: CellProps) {
  return <Text style={{ backgroundColor: symbol === ' ' ? '#ccc' : 'transparent', minWidth: 10 }} {...props}>{symbol}</Text>;
}
function Pipe() {
  return <Text>{'|'}</Text>;
}
function Caret() {
  return <Text>{'-'}</Text>;
}

type Status = 'o_gagne' | 'x_gagne' | 'pas-fini' | 'plein'

const Circle = 'o'
const Cross = 'x'
const Empty = ' '
type Symbol = typeof Circle | typeof Cross | typeof Empty
type GridProps = { tab: Symbol[][], onPress(x: number, y: number): void }
function Grid(props: GridProps) {
  return (
    <View>
      <Row>
        <Cell onPress={() => props.onPress(0, 0)} symbol={props.tab[0][0]} />
        <Pipe />
        <Cell onPress={() => props.onPress(0, 1)} symbol={props.tab[0][1]} />
        <Pipe />
        <Cell onPress={() => props.onPress(0, 2)} symbol={props.tab[0][2]} />
      </Row>
      <Row>
        <Caret />
        <Pipe />
        <Caret />
        <Pipe />
        <Caret />
      </Row>
      <Row>
        <Cell onPress={() => props.onPress(1, 0)} symbol={props.tab[1][0]} />
        <Pipe />
        <Cell  onPress={() => props.onPress(1, 1)} symbol={props.tab[1][1]} />
        <Pipe />
        <Cell  onPress={() => props.onPress(1, 2)} symbol={props.tab[1][2]} />
      </Row>
      <Row>
        <Caret />
        <Pipe />
        <Caret />
        <Pipe />
        <Caret />
      </Row>
      <Row>
        <Cell  onPress={() => props.onPress(2, 0)} symbol={props.tab[2][0]} />
        <Pipe />
        <Cell  onPress={() => props.onPress(2, 1)} symbol={props.tab[2][1]} />
        <Pipe />
        <Cell  onPress={() => props.onPress(2, 2)} symbol={props.tab[2][2]} />
      </Row>
    </View>
  );
}



export default function App() {
  const [tab, setTab]  = useState<Symbol[][]>([
    [Empty, Empty, Empty],
    [Empty, Empty, Empty],
    [Empty, Empty, Empty]
  ]);

  const [gamer, setGamer] = useState<typeof Cross | typeof Circle>(Cross)

  const onPress = (x: number, y: number) => {
    const copyTab = tab;
    copyTab[x][y] = gamer;
    setTab([copyTab[0], copyTab[1], copyTab[2]]);
    if (gamer === Cross) {
      setGamer(Circle)
    } else {
      setGamer(Cross)
    }
  }

  return (
    <View style={styles.container}>
      <Grid tab={tab} onPress={onPress}/>
      <Text>{"\nÀ qui le tour ?"}</Text>
      <Text>{gamer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
