import {useState} from 'react'
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { s } from './App.style';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import TabBottomMenu from './components/TabBottomMenu/TabBottomMenu'
import ArticleFormDialog from './components/ArticleFormDialog';
import { v4 as uuidv4 } from 'uuid'

export default function App() {

  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false)

    const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Titre 1",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sequi. Obcaecati magnam esse ullam, totam quibusdam cum optio quis est exercitationem repellat maxime harum provident sunt, ea vero laborum praesentium!"
    },
    {
      id: 2,
      title: "Titre 2",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sequi. Obcaecati magnam esse ullam, totam quibusdam cum optio quis est exercitationem repellat maxime harum provident sunt, ea vero laborum praesentium!"
    },
    {
      id: 3,
      title: "Titre 3",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sequi. Obcaecati magnam esse ullam, totam quibusdam cum optio quis est exercitationem repellat maxime harum provident sunt, ea vero laborum praesentium!"
    },
    {
      id: 4,
      title: "Titre 4",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sequi. Obcaecati magnam esse ullam, totam quibusdam cum optio quis est exercitationem repellat maxime harum provident sunt, ea vero laborum praesentium!"
    },
    {
      id: 5,
      title: "Titre 5",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sequi. Obcaecati magnam esse ullam, totam quibusdam cum optio quis est exercitationem repellat maxime harum provident sunt, ea vero laborum praesentium!"
    }
  ])

  const viewPopinAddArticle = (article) => {
    setIsAddDialogVisible(true)
  }

  const addArticle = (title, content) => {
    let newArticle = {
      id: uuidv4(),
      title: title,
      content: content
    }

    let newArticles = [...articles]
    newArticles.push(newArticle)
    setArticles(newArticles)
    setIsAddDialogVisible(false)
  }

  const onClose = () => {
    setIsAddDialogVisible(false)
  }

  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
        <ScrollView>
          <View style={{...styles.container}}>
            <View style={{alignContent: 'baseline' , flexDirection: 'row', flexWrap: 'wrap'}}>
              {
                  articles.map((article, id)=>{
                    return <View key={id} style={{padding: 10, width: '43%', margin: 10, backgroundColor: 'white', border: "1px solid white"}}>
                              <Text style={{fontSize: 25}}>{article.title}</Text>
                              <Text>{article.content.substring(0,61) + '...'}</Text>
                            </View>
                  })
              }              
            </View>

          </View>
          <View style={s.footer}>
            <TabBottomMenu onPress={viewPopinAddArticle}/>
          </View>
        </ScrollView>
         
        </SafeAreaView>   
      </SafeAreaProvider>
      <ArticleFormDialog visible={isAddDialogVisible} onClose={onClose} onSubmit={addArticle} />  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'flex-start',
  },
});
