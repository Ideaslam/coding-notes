
// class WithLog extends EventEmitter {
//   execute(taskFunc) {
//     console.log('Before executing');
//     this.emit('begin');
//     taskFunc();
//     this.emit('end');
//     console.log('After executing');
//   }
// }

// const withLog = new WithLog();

// withLog.on('begin', () => console.log('About to execute'));
// withLog.on('end', () => console.log('Done with execute'))

// withLog.execute(() => console.log('*** Executing task ***'));

// class WithTime extends EventEmitter {
//   execute(asyncFunc) {
//     this.emit('begin');
//     console.time('execute');
//     asyncFunc(...args, (err, data) => {
//       if (err) {
//         return this.emit('error', err);
//       }

//       this.emit('data', data);
//       console.timeEnd('execute');
//       this.emit('end');
//     });
//   }
// }



// class PrintName extends EventEmitter{


// async execute (doit ){
// 	this.emit('start') ;
//      doit() ;
// 	await this.emit('end') ;
	
// }

// }


const fs = require('fs');
const EventEmitter = require('events');

// class WithTime extends EventEmitter {
//   execute(asyncFunc, ...args) {
//     this.emit('begin');
//     console.time('execute');
//     asyncFunc(...args, (err, data) => {
//       if (err) {
//         return this.emit('error', err);
//       }

//       this.emit('data', data);
//       console.timeEnd('execute');
//       this.emit('end');
//     });
//   }
// }



// class WithTime extends EventEmitter {
//   async execute(asyncFunc, ...args) {
//     this.emit('begin');
//     try {
//       console.time('execute');
//       const data = await asyncFunc(...args);
//       this.emit('data', data);
//       console.timeEnd('execute');
//       this.emit('end');
//     } catch(err) {
//       this.emit('error', err);
//     }
//   }
// }

class WithTime extends EventEmitter {
 async execute(asyncFunc) {
      this.emit('begin');
      await asyncFunc();
      this.emit('end');
  
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

withTime.execute();