import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

const ArticleFormDialog = ({ visible, onClose, onSubmit }) => {
    
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleContentChange = (text) => {
    setContent(text);
  };

  const handleSubmit = () => {
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#fff', padding: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Nouvel Article</Text>
          <TextInput
            placeholder="Titre"
            value={title}
            onChangeText={handleTitleChange}
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Contenu"
            value={content}
            onChangeText={handleContentChange}
            multiline
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 150 }}
          />
          <Button title="Enregistrer" onPress={handleSubmit} />
          <Button title="Annuler" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default ArticleFormDialog;
