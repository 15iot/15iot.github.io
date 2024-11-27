const fs = require('fs');
const path = require('path');
const ftp = require('ftp');
const glob = require('glob');

// FTP配置
const config = {
  host: '119.4.52.154',
  port: 11021,
  user: 'viewsdoc', // FTP登录用户名
  password: 'ncGizfBH7Pa6yRiz', // FTP登录密码
  localRoot: path.join(__dirname, 'docs/.vuepress/dist'), // 本地文件目录
  remoteRoot: '/www/wwwroot/Views.cn', // FTP服务器上的目标目录
  include: ['**/*'] // 要上传的文件，可以使用通配符
};

// 创建一个新的FTP实例
const client = new ftp();

// 确保FTP连接成功
client.on('ready', () => {
  console.log('FTP connected and logged in');
  uploadFiles(config.localRoot, config.remoteRoot, config.include, () => {
    console.log('Upload complete');
    client.end();
  });
});

// FTP连接配置
client.connect(config);

// 使用glob模块来匹配符合条件的文件
function uploadFiles(localDir, remoteDir, includePatterns, callback) {
  let uploadCount = 0; // 记录正在上传的文件数

  includePatterns.forEach(pattern => {
    // 使用glob来匹配符合pattern的文件
    glob(path.join(localDir, pattern), (err, files) => {
      if (err) {
        console.error('Failed to match files with glob:', err);
        return;
      }

      console.log('Matched files:', files); // 输出匹配的文件

      // 如果没有匹配到任何文件，输出日志
      if (files.length === 0) {
        console.log('No files matched the pattern:', pattern);
      }

      // 上传所有匹配到的文件
      files.forEach(file => {
        const remoteFile = path.join(remoteDir, path.relative(localDir, file)).replace(/\\/g, '/');
        console.log('Preparing to upload file:', file, 'to', remoteFile);

        fs.stat(file, (err, stats) => {
          if (err) {
            console.error('Failed to stat file:', err);
            return;
          }

          if (stats.isDirectory()) {
            // 如果是目录，递归上传
            createRemoteDirectory(remoteFile, () => {
              uploadFiles(file, remoteFile, ['**/*'], () => {
                checkUploadCompletion();
              });
            });
          } else {
            // 如果是文件，上传文件
            uploadFile(file, remoteFile, () => {
              checkUploadCompletion();
            });
          }
        });
      });
    });
  });

  function uploadFile(localFile, remoteFile, cb) {
    client.put(localFile, remoteFile, (err) => {
      if (err) {
        console.error('Failed to upload file:', err);
      } else {
        console.log('Uploaded file:', localFile);
      }
      cb();
    });
  }

  // 创建远程目录
  function createRemoteDirectory(remoteDir, cb) {
    client.mkdir(remoteDir, true, (err) => {
      if (err) {
        console.error('Failed to create remote directory:', err);
      } else {
        console.log('Created remote directory:', remoteDir);
      }
      cb();
    });
  }

  // 每上传一个文件或目录就检查是否所有文件都上传完成
  function checkUploadCompletion() {
    uploadCount++;
    if (uploadCount === files.length) {
      console.log('All files uploaded');
      callback();
    }
  }
}

// 错误处理
client.on('error', (err) => {
  console.error('FTP Error:', err);
  client.end();
});

client.on('end', () => {
  console.log('FTP connection closed');
});
