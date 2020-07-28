from setuptools import setup, find_packages

"""
Set packages to a list of all packages in your project, including their subpackages, 
sub-subpackages, etc. Although the packages can be listed manually, 
setuptools.find_packages() finds them automatically. 

Use the include keyword argument to find only the given packages. 
Use the exclude keyword argument to omit packages that are not intended to be released and installed.
"""
setup(name='finance', 
    version='1.0', 
    packages=find_packages(include=['finance', 'finance.*']),
    install_requires=[
        'beautifulsoup4',
        'requests',
        'requests_cache',
    ])