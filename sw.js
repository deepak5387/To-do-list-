const CACHE_NAME = 'taskflow-v1';
const urlsToCache = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Handle background sync for offline task creation
self.addEventListener('sync', (event) => {
  if (event.tag === 'task-sync') {
    event.waitUntil(syncTasks());
  }
});

async function syncTasks() {
  // This would sync pending tasks when connection is restored
  const tasks = await getStoredTasks();
  // Sync with server if needed
}

async function getStoredTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  } catch {
    return [];
  }
}

// Show notification for due tasks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Register for push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'You have tasks due soon!',
    icon: '/manifest-icon-192.png',
    badge: '/manifest-icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Tasks',
        icon: '/manifest-icon-192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/manifest-icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('TaskFlow Reminder', options)
  );
});
