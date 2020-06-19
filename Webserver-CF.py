from troposhere import Ref, Template, Parameter, Output,Join,GetAtt
import troposhere.ec2 as ec2
#pip install troposphere
t = Template()
# ------------------------------------Security Group--------------------------------------------------------------------
sg = ec2.SecurityGroup("CF-SG")
sg.GroupDescription = "Allow access through port 80 and 22 to the web server"
sg.SecurityGroupIngress = [
    ec2.SecurityGroupRule(IpProtocol = "tcp",FromPort="22",ToPort="22",CidrIP="0.0.0.0/0"),
    ec2.SecurityGroupRule(IpProtocol = "tcp",FromPort="80",ToPort="80",CidrIP="0.0.0.0/0"),
]
t.add_resource(sg)
# -------------------------------------------SSH Key pair---------------------------------------------------------------
keypair = t.add_parameter(Parameter(
    "keyName",
    Description = "Name of the SSH key pair that will be used to access the instance",
    Type = "String"
))
# --------------------------------------AMI ID and instance type--------------------------------------------------------
instance = ec2.instance("Webserver")
instance.ImageID = "ami-e689729e"
instance.InstanceType = "t2.micro"
instance.SecurityGroup = [Ref(sg)] #We used Ref here because sg contains more than one attribute
instance.KeyName = Ref(keypair)
t.add_resource(instance)
print(t.to_json())
