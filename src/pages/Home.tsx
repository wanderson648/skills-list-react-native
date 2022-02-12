import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Keyboard
} from 'react-native';


import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


interface SkillDataProp {
  id: string;
  name: string;
}

export function Home() {
  const [skills, setNewSkills] = useState('');
  const [greeting, setGreeting] = useState('');
  const [mySkills, setMySkills] = useState<SkillDataProp[]>([]);

  // function for add new skill
  const handleAddNewSkill = ()=> {
    const data = {
      id: String(new Date().getTime()),
      name: skills
    }

    setMySkills(oldState => [...oldState, data]);
    setNewSkills(''); // clean the field of input
    Keyboard.dismiss(); // close the keyborad
  }


  const handleRemoveSkill = (id: string)=> {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(()=> {
    const currentHour = new Date().getHours();
    if(currentHour < 12) {
      setGreeting('Good Morning!');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon!');
    } 
    else {
      setGreeting('Good night!')
    }
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Wanderson.
      </Text>

      <Text style={styles.greeting}>
        {greeting}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        value={skills}
        onChangeText={setNewSkills}
      />
      
      <Button 
        title="Add skill"
        onPress={handleAddNewSkill} 
      />

      <Text style={[styles.title, { marginVertical: 20 }]}>
        My skils
      </Text>

      
      <FlatList
        data={mySkills}
        keyExtractor={(item)=> item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item })=> (
          <SkillCard 
            skill={item.name}
            onPress={()=> handleRemoveSkill(item.id)}
          />
        )}
      />

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 50
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 14,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greeting: {
    marginVertical: 10
  }
})