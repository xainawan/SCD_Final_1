# MERN App Kubernetes Deployment (Roll No: 22i-2453)

This folder has the Kubernetes setup to run a **MERN app** in its own namespace: `22i-2453-mern-app`.

## What's Inside

- **Frontend**
  - 2 replicas, port 8888
  - Image: `noorulain26/docker-mern-nginx-bezkoder-ui-1:latest`
  - Exposed as NodePort: 30173

- **Backend**
  - 2 replicas, port 6868
  - Image: `noorulain26/docker-mern-nginx-bezkoder-api-1:latest`
  - Exposed as ClusterIP (internal)

- **MongoDB**
  - 1 replica, port 27017
  - Uses PVC for persistent storage (1Gi)

## How to Run

```bash
kubectl apply -f mern-app.yaml
kubectl get all -n 22i-2453-mern-app
kubectl get pvc -n 22i-2453-mern-app
