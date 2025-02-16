import games from '../domain/Games';

/**
 * Socket event for when a user disconnects.
 * @param {*} socket
 */
export function start(socket) {
  socket.on('start', ({sessionId}) => {
    games.getGame(sessionId).startCountdown();
  });
}
