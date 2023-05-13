import React from 'react'
import { ScrollView, SectionList, View, Text } from 'react-native'



const users = [
  {
    id: 1,
    name: "mahir",
    data: ["PHP", "Reactjs", "Angular"] // use key name data
  },
  {
    id: 2,
    name: "mannan",
    data: ["PHP", "Reactjs", "Angular"]
  },
]


const Sectionlist = () => {

  return (
    <>
      <ScrollView>
        <SectionList
          sections={users}
          renderItem={({ item }) => <View><Text>{item}</Text></View>}
          renderSectionHeader={({ section: { name } }) => <View>
            <Text style={{fontSize: 20, fontWeight: "700"}}>{name}</Text>
          </View>}


        />

      </ScrollView>
    </>
  )
}

export default Sectionlist