from flask_api import FlaskAPI
from fla
# from requests import request

print("change applied")

app = FlaskAPI(__name__)

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
def example():
    return request.json()
    

if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0')