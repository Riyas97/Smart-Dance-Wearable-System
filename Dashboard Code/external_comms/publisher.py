import pika, os, logging, config
# pip install pika 
# python publisher.py

logging.basicConfig()

# Parse CLODUAMQP_URL (fallback to localhost)
url = os.environ.get('CLOUDAMQP_URL', config.CLOUDAMQP_URL)
params = pika.URLParameters(url)
params.socket_timeout = 5

connection = pika.BlockingConnection(params) # Connect to CloudAMQP
channel = connection.channel() # start a channel

# raw_data
# emg 
# results
# channel.queue_declare(queue='raw_data') # Declare a queue
channel.queue_declare(queue='trainee_one_data') # Declare a queue
channel.queue_declare(queue='trainee_two_data') # Declare a queue
channel.queue_declare(queue='trainee_three_data') # Declare a queue
channel.queue_declare(queue='emg') # Declare a queue
channel.queue_declare(queue='results') # Declare a queue
# send a message

for i in range(2):
    data = "1 | 1456 | 20 30 40 12 13 14"
    emg_data = "1555 | 2.3"
    channel.basic_publish(exchange='', routing_key='raw_data', body=data)
    channel.basic_publish(exchange='', routing_key='emg', body=emg_data)

#channel.basic_publish(exchange='', routing_key='raw_data', body='raw_data')
#channel.basic_publish(exchange='', routing_key='emg', body='emg')
#channel.basic_publish(exchange='', routing_key='results', body='results')

print ("[x] Message sent to consumer")
connection.close()