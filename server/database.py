from sqlalchemy import create_engine, text
import os

conn_str = os.environ.get('DB_CONN_STR')

engine = create_engine(
  conn_str, 
  connect_args={
    "ssl": {
      "ssl_ca": "/etc/ssl/cert.pem"
    }
  })

def load_projects_from_db():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM projects"))
        projects = []
        for row in result.all():
            dict = {
                'id': row[0],
                'title': row[1],
                'image': row[2],
                'link': row[3],
                'link_github': row[4]
            }
            projects.append(dict)
        return projects
        