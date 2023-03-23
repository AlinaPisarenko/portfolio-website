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

def load_jobs_from_db():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM projects"))
        projects = []
        for row in result.all():
            dict = {
                'id': row[0],
                'title': row[1],
                'demo_link': row[2],
                'github_link': row[3],
                'img': row[4],
                'stack': row[5],
                'description': row[6]
            }
            projects.append(dict)
        return projects
        