#!/bin/bash
# Start both servers

echo "🚀 Starting CollectMarket..."
echo ""

# Start backend
echo "📦 Starting backend API on port 3000..."
cd "$(dirname "$0")/backend" && npm start &
BACKEND_PID=$!

sleep 2

# Start frontend
echo "🎨 Starting frontend server on port 4000..."
cd "$(dirname "$0")/frontend" && npm start &
FRONTEND_PID=$!

echo ""
echo "✅ CollectMarket running!"
echo "   Frontend: http://localhost:4000"
echo "   Backend:  http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers."

# Wait and cleanup
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo 'Stopped.'" EXIT INT
wait
