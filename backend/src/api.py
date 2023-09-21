from flask import Flask, jsonify
from requests import request

print("change applied")

app = Flask(__name__)

onibus = [
    {
        'id': 1,
        'linha': 'TI Rio Doce/ CDU',
        'chegada': 10
    },
    {
        'id': 2,
        'linha': 'TI tancredo neves',
        'chegada': 14
    },
    {
        'id': 3,
        'linha': 'circular',
        'chegada': 24
    },
    {
        'id': 4,
        'linha': 'TI barro/ Macaxeira',
        'chegada': 11
    },

]
@app.route('/onibus', methods=['GET'])
def obter_onibus():
    return "hello world"

# @app.route('/onibus/<int:id>', methods=['GET'])

# def obter_onibus_por_id(id):
#     for frota in onibus:
#         if frota.get('id') == id:
#             return jsonify(frota)

# def editar_onibus_por_id(id):
#     livro_alterado = request.get_json()
    

app.run(port=5000, host='localhost')