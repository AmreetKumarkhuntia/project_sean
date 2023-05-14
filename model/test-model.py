import pickle
import json
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

# load the saved model
model = load_model('sentimental_anayalsis_model.h5')

# load the tokenizer used to preprocess the data
with open('tokenizer.pickle', 'rb') as f:
    tokenizer = pickle.load(f)

# test the model on new input review
input_review = "This movie was the worst thing I've ever seen. It was a complete waste of time and money."
# preprocess the input review
input_seq = tokenizer.texts_to_sequences([input_review])
input_padded = pad_sequences(input_seq, maxlen=100, padding='post', truncating='post')
# make prediction using the trained model
prediction = model.predict(input_padded)[0][0]

# print the prediction result
if prediction < 0.5:
    print("The input review is negative.")
else:
    print("The input review is positive.")

tokenizer_json = tokenizer.to_json()
with open('tokenizer.json', 'w') as f:
    f.write(tokenizer_json)