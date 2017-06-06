(function() {
    'use strict';

    var module = angular.module('app.research.stats', []);

    module.factory('researchStat', function() {
        function getPeopleStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                {
                    id: 'students',
                    name: 'Учні',
                    value: 150
                },
                {
                    id: 'workers',
                    name: 'Працівники',
                    value: 650
                },
                {
                    id: 'residents',
                    name: 'Мешканці',
                    value: 200
                }
            ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' осіб'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? filtered + ' осіб' : (filtered / summary * 100) + '%'
            }
        }

        function getBuildingsStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                    {
                        id: 'ruin',
                        name: 'Руїни',
                        value: 24370
                    },
                    {
                        id: 'housing',
                        name: 'Житло',
                        value: 28013
                    },
                    {
                        id: 'culture',
                        name: 'Культура',
                        value: 39296
                    },
                    {
                        id: 'garage',
                        name: 'Гаражі',
                        value: 51213
                    },
                    {
                        id: 'cafe',
                        name: 'Кафе',
                        value: 83502
                    },
                    {
                        id: 'office',
                        name: 'Офіси',
                        value: 191814
                    }
                ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' м2'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? Math.round(filtered) + ' м2' : Math.round(filtered / summary * 100) + '%'
            }
        }

        function getFacadesStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                    {
                        id: 'active',
                        name: 'Активний',
                        value: 586.79
                    },
                    {
                        id: 'inactive',
                        name: 'Неактивний',
                        value: 1899.50
                    },
                    {
                        id: 'dopey',
                        name: 'Млявий',
                        value: 3756.96
                    },
                    {
                        id: 'green',
                        name: 'Озеленення',
                        value: 1605.97
                    },
                    {
                        id: 'hole',
                        name: 'Проїзд',
                        value: 574
                    },
                    {
                        id: 'monument',
                        name: 'Пам’ятка',
                        value: 495.76
                    },
                    {
                        id: 'nothing',
                        name: 'Ніякий',
                        value: 11167.84
                    },
                    {
                        id: 'tolerable',
                        name: 'Задовільний',
                        value: 2888.91
                    }
                ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' м.'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? Math.round(filtered) + ' м.' : Math.round(filtered / summary * 100) + '%'
            }
        }

        function getAccessibilityStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                    {
                        id: 'roads',
                        name: 'Дороги',
                        value: 115546
                    },
                    {
                        id: 'open',
                        name: 'Легкодосяжні',
                        value: 226849
                    },
                    {
                        id: 'hard_to_reach',
                        name: 'Важкодоступні',
                        value: 246957
                    },
                    {
                        id: 'unreachable',
                        name: 'Недосяжні',
                        value: 184953
                    }
                ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' м2'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? Math.round(filtered) + ' м2' : Math.round(filtered / summary * 100) + '%'
            }
        }

        function getCarsStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                    {
                        id: 'yard',
                        name: 'Подвір’я',
                        value: 1972
                    },
                    {
                        id: 'street',
                        name: 'Вулиця',
                        value: 2249
                    }
                ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' од.'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? Math.round(filtered) + ' од.' : Math.round(filtered / summary * 100) + '%'
            }
        }

        function getTreesStat(filter, isAbsolute) {
            var summary = 0,
                filtered = 0,
                options = [
                    {
                        id: 'l',
                        name: 'Великі',
                        value: 833
                    },
                    {
                        id: 'm',
                        name: 'Середні',
                        value: 829
                    },
                    {
                        id: 's',
                        name: 'Малі',
                        value: 374
                    }
                ];

            options = options.filter(function(option) {
                var result = filter.indexOf(option.id) !== -1;

                summary += option.value;
                filtered += result ? option.value : 0;

                return result;
            });

            options = options.map(function(option) {
                var text;

                if (isAbsolute) {
                    text = option.name + ' - ' + option.value + ' од.'
                } else {
                    text = option.name + ' - ' + Math.round(option.value / summary * 100) + '%'
                }

                return {
                    width: Math.round(option.value / filtered * 100),
                    text: text
                }
            });

            return {
                options: options,
                total: isAbsolute ? Math.round(filtered) + ' од.' : Math.round(filtered / summary * 100) + '%'
            }
        }

        return {
            getPeopleStat: getPeopleStat,
            getBuildingsStat: getBuildingsStat,
            getFacadesStat: getFacadesStat,
            getAccessibilityStat: getAccessibilityStat,
            getCarsStat: getCarsStat,
            getTreesStat: getTreesStat
        }
    });
}());