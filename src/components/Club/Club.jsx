import { Code2, Users, Building, Shield, Terminal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ClubExperience = () => {
  return (
    <div className="min-h-screen bg-[#09090B] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-[#FAFAFA]" />
          <h1 className="text-4xl font-bold text-[#FAFAFA]">
            Technical Club Experience
          </h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Shield className="w-6 h-6 text-green-500" />
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Security
                </Badge>
              </div>
              <p className="text-3xl font-bold text-[#FAFAFA] mt-4">Nexus</p>
              <p className="text-sm text-[#FAFAFA]/60">Cybersecurity Club</p>
            </CardContent>
          </Card>

          <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Code2 className="w-6 h-6 text-blue-500" />
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Programming
                </Badge>
              </div>
              <p className="text-3xl font-bold text-[#FAFAFA] mt-4">Bytecraft</p>
              <p className="text-sm text-[#FAFAFA]/60">Programming Club</p>
            </CardContent>
          </Card>
        </div>

        {/* Club Memberships */}
        <Card className="bg-[#09090B] border border-[#FAFAFA]/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-[#FAFAFA]" />
              <CardTitle className="text-xl text-[#FAFAFA]">
                Club Memberships
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Nexus */}
              <div className="bg-[#FAFAFA]/5 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      Nexus
                    </h3>
                    <p className="text-[#FAFAFA]/60 mt-1">
                      Cybersecurity Club - Development Section
                    </p>
                  </div>
                  <Badge 
                    className="bg-green-500/10 text-green-500 border-green-500/20"
                  >
                    Security Focus
                  </Badge>
                </div>
                <div className="bg-[#09090B] p-4 rounded border border-[#FAFAFA]/10">
                  <p className="text-[#FAFAFA]/80">
                    Member of the development team in a cybersecurity-focused club, working on security tools and applications. Notable for organizing CTF competitions and security-related events.
                  </p>
                </div>
              </div>

              {/* Bytecraft */}
              <div className="bg-[#FAFAFA]/5 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA] flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-500" />
                      Bytecraft
                    </h3>
                    <p className="text-[#FAFAFA]/60 mt-1">
                      Programming Club - Development Section
                    </p>
                  </div>
                  <Badge 
                    className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                  >
                    Programming Focus
                  </Badge>
                </div>
                <div className="bg-[#09090B] p-4 rounded border border-[#FAFAFA]/10">
                  <p className="text-[#FAFAFA]/80">
                    Active member in the development section, focusing on software development and programming projects. Contributing to coding initiatives and collaborative development efforts.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubExperience;