
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.edit = function (req, res) {
    //TODO: get buttons
    var addBtns = [{ name: 'test1', points: 1 }, { name: 'test2', points: 2 }];
    var negBtns = [{ name: 'test-1', points: -1 }, { name: 'test-2', points: -2 }];
    //TODO: get total
    var totalPoints = 240;
    
    res.render('edit', { title: 'Edit', year: new Date().getFullYear(), message: 'Edit points here', addButtons: addBtns, negButtons: negBtns, total: totalPoints });
};

exports.report = function (req, res) {    
    res.render('report', { title: 'Reports', year: new Date().getFullYear(), message: 'Get Reports on recent point activity.' });
};

exports.admin = function (req, res) {
    res.render('admin', { title: 'Admin Menu', year: new Date().getFullYear(), message: 'Add/Remove/Change Point Values' });
};
