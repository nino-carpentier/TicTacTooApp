
import React, { useState, useEffect } from 'react';
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
type Gamer = typeof Cross | typeof Circle
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

function verify(joueur: Gamer, t: Symbol[][]) {
  const { stringify: strfy } = JSON
  const v =
    strfy(t[0]) === strfy([joueur,joueur,joueur]) || 
    strfy(t[1]) === strfy([joueur,joueur,joueur]) ||
    strfy(t[2]) === strfy([joueur,joueur,joueur]) ||
    (
      t[0][0]===joueur &&
      t[1][0]===joueur &&
      t[2][0]===joueur
    )
    ||
    (
      t[0][1]===joueur &&
      t[1][1]===joueur &&
      t[2][1]===joueur
    )
    ||
    (
      t[0][2]===joueur &&
      t[1][2]===joueur &&
      t[2][2]===joueur
    )
    ||
    (
      t[0][2]===joueur &&
      t[1][1]===joueur &&
      t[2][0]===joueur
    )
  
    
    return v
}

export default function App() {
  const [tab, setTab]  = useState<Symbol[][]>([
    [Empty, Empty, Empty],
    [Empty, Empty, Empty],
    [Empty, Empty, Empty]
  ]);

  const [gamer, setGamer] = useState<Gamer>(Cross)

  const [status, setStatus] = useState<Status>("pas-fini")

  const onPress = (x: number, y: number) => {
    const copyTab = tab;
    copyTab[x][y] = gamer;
    setTab([copyTab[0], copyTab[1], copyTab[2]]);
  }

  useEffect(() => {
    if (verify(Cross, tab)) {
      setStatus('x_gagne')
    }
    if (verify(Circle, tab)) {
      setStatus('o_gagne')
    }
    if(
      tab[0][0] !== Empty &&
      tab[0][1] !== Empty && 
      tab[0][2] !== Empty && 
      tab[1][0] !== Empty && 
      tab[1][1] !== Empty && 
      tab[1][2] !== Empty && 
      tab[2][0] !== Empty && 
      tab[2][1] !== Empty && 
      tab[2][2] !== Empty) {
        setStatus('plein')
    }
    if (gamer === Cross) {
      setGamer(Circle)
    } else {
      setGamer(Cross)
    }
  }, [tab])

  return (
    <View style={styles.container}>
      <Grid tab={tab} onPress={onPress}/>
      <Text>{"\nÀ qui le tour ?"}</Text>
      <Text>{gamer}</Text>
      <Text>{"\nStatus"}</Text>
      <Text>{status}</Text>
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
