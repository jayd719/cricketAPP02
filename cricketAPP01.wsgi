import sys


sys.path.insert(0,'/var/www/cricketAPP02')
activate_this ='/var/www/cricketAPP02/env/bin/active_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))
    
from mainFile import app as application
